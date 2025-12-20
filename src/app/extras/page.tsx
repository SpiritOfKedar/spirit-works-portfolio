"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Tv, BookOpen, Film, Star, Heart } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

// Your personal favorites data
const EXTRAS_DATA = {
    anime: [
        {
            title: "Fullmetal Alchemist: Brotherhood",
            rating: 10,
            status: "Completed",
            image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
            genre: "Action, Adventure, Fantasy",
        },
        {
            title: "Attack on Titan",
            rating: 10,
            status: "Completed",
            image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
            genre: "Action, Drama, Fantasy",
        },
        {
            title: "Death Note",
            rating: 9,
            status: "Completed",
            image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
            genre: "Psychological, Thriller",
        },
        {
            title: "Steins;Gate",
            rating: 9,
            status: "Completed",
            image: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
            genre: "Sci-Fi, Thriller",
        },
    ],
    books: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            status: "Read",
            genre: "Self-Help",
        },
        {
            title: "The Pragmatic Programmer",
            author: "David Thomas & Andrew Hunt",
            status: "Read",
            genre: "Programming",
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            status: "Reading",
            genre: "Programming",
        },
    ],
    movies: [
        {
            title: "Interstellar",
            year: 2014,
            rating: 10,
            genre: "Sci-Fi",
        },
        {
            title: "The Dark Knight",
            year: 2008,
            rating: 10,
            genre: "Action, Crime",
        },
        {
            title: "Inception",
            year: 2010,
            rating: 9,
            genre: "Sci-Fi, Thriller",
        },
    ],
};

export default function ExtrasPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            {/* Header */}
            <section id="extras-header">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            <Heart className="w-3.5 h-3.5" />
                            Personal Favorites
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Beyond Code
                        </h1>
                        <p className="text-muted-foreground max-w-[600px]">
                            A glimpse into my interests outside of programming. Animes that inspired me,
                            books that shaped my thinking, and movies I absolutely love.
                        </p>
                    </div>
                </BlurFade>
            </section>

            {/* Anime Section */}
            <section id="anime">
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <div className="flex items-center gap-2 mb-4">
                        <Tv className="w-5 h-5 text-pink-500" />
                        <h2 className="text-xl font-bold">Anime</h2>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {EXTRAS_DATA.anime.map((anime, index) => (
                        <BlurFade key={anime.title} delay={BLUR_FADE_DELAY * 3 + index * 0.05}>
                            <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={anime.image}
                                        alt={anime.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-2 space-y-1">
                                    <h3 className="text-xs sm:text-sm font-medium line-clamp-1">{anime.title}</h3>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs text-muted-foreground">{anime.rating}/10</span>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground line-clamp-1">{anime.genre}</p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* Books Section */}
            <section id="books">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        <h2 className="text-xl font-bold">Books</h2>
                    </div>
                </BlurFade>
                <div className="grid gap-3">
                    {EXTRAS_DATA.books.map((book, index) => (
                        <BlurFade key={book.title} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
                            <div className="flex items-center gap-4 p-3 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300">
                                <div className="w-10 h-14 sm:w-12 sm:h-16 rounded bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium truncate">{book.title}</h3>
                                    <p className="text-xs text-muted-foreground">{book.author}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-foreground/5 text-muted-foreground">
                                            {book.genre}
                                        </span>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${book.status === "Reading"
                                                ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                                                : "bg-green-500/10 text-green-600 dark:text-green-400"
                                            }`}>
                                            {book.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* Movies Section */}
            <section id="movies">
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <div className="flex items-center gap-2 mb-4">
                        <Film className="w-5 h-5 text-purple-500" />
                        <h2 className="text-xl font-bold">Movies</h2>
                    </div>
                </BlurFade>
                <div className="grid gap-3">
                    {EXTRAS_DATA.movies.map((movie, index) => (
                        <BlurFade key={movie.title} delay={BLUR_FADE_DELAY * 9 + index * 0.05}>
                            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                                        <Film className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium">{movie.title}</h3>
                                        <p className="text-xs text-muted-foreground">{movie.year} • {movie.genre}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-medium">{movie.rating}</span>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* Footer note */}
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <p className="text-center text-sm text-muted-foreground py-8">
                    ✨ Always open to recommendations!
                </p>
            </BlurFade>
        </main>
    );
}
