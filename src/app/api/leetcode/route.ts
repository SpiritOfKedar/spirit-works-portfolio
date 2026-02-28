import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";
const USERNAME = "spirit45";

const query = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username: USERNAME },
      }),
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from LeetCode" },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { error: data.errors[0]?.message || "GraphQL error" },
        { status: 500 }
      );
    }

    const { matchedUser, allQuestionsCount } = data.data;
    const acStats = matchedUser.submitStatsGlobal.acSubmissionNum;
    const allCounts = allQuestionsCount;

    const getCount = (arr: { difficulty: string; count: number }[], diff: string) =>
      arr.find((item) => item.difficulty === diff)?.count ?? 0;

    const result = {
      totalSolved: getCount(acStats, "All"),
      totalQuestions: getCount(allCounts, "All"),
      easySolved: getCount(acStats, "Easy"),
      totalEasy: getCount(allCounts, "Easy"),
      mediumSolved: getCount(acStats, "Medium"),
      totalMedium: getCount(allCounts, "Medium"),
      hardSolved: getCount(acStats, "Hard"),
      totalHard: getCount(allCounts, "Hard"),
      ranking: matchedUser.profile.ranking ?? 0,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("LeetCode API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
