"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Tv, BookOpen, Film, Star, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

// Animated section header component
const SectionHeader = ({
    icon: Icon,
    title,
    delay
}: {
    icon: any;
    title: string;
    delay: number;
}) => (
    <BlurFade delay={delay}>
        <motion.div
            className="flex items-center gap-3 mb-6"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <motion.div
                className="p-2 rounded-xl bg-foreground/5 backdrop-blur-sm border border-border/50"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <Icon className="w-5 h-5 text-foreground" />
            </motion.div>
            <h2 className="text-xl font-bold">{title}</h2>
        </motion.div>
    </BlurFade>
);

// Animated anime card
const AnimeCard = ({ anime, index }: { anime: typeof EXTRAS_DATA.anime[0]; index: number }) => (
    <BlurFade delay={BLUR_FADE_DELAY * 3 + index * 0.08}>
        <motion.div
            className="group relative overflow-hidden rounded-xl bg-foreground/[0.02] backdrop-blur-sm border border-border/50"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)",
                }}
            />

            <div className="aspect-[3/4] overflow-hidden relative">
                <motion.img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
                {/* Rating badge */}
                <motion.div
                    className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                >
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium">{anime.rating}</span>
                </motion.div>
            </div>

            <div className="p-3 space-y-1.5 relative">
                <h3 className="text-sm font-semibold line-clamp-1 group-hover:text-foreground/80 transition-colors duration-300">
                    {anime.title}
                </h3>
                <p className="text-[11px] text-muted-foreground line-clamp-1">{anime.genre}</p>
            </div>
        </motion.div>
    </BlurFade>
);

// Animated book card
const BookCard = ({ book, index }: { book: typeof EXTRAS_DATA.books[0]; index: number }) => (
    <BlurFade delay={BLUR_FADE_DELAY * 6 + index * 0.08}>
        <motion.div
            className="group flex items-center gap-4 p-4 rounded-xl bg-foreground/[0.02] backdrop-blur-sm border border-border/50 overflow-hidden relative"
            whileHover={{ x: 8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {/* Animated gradient line on left */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            />

            <motion.div
                className="w-12 h-16 rounded-lg bg-foreground/5 backdrop-blur-sm border border-border/50 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                whileHover={{ rotate: [-2, 2, -2, 0] }}
                transition={{ duration: 0.4 }}
            >
                <BookOpen className="w-6 h-6 text-muted-foreground" />
                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>

            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold truncate group-hover:text-foreground/80 transition-colors duration-300">
                    {book.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{book.author}</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/5 border border-border/50 text-muted-foreground">
                        {book.genre}
                    </span>
                    <motion.span
                        className={`text-[10px] px-2 py-0.5 rounded-full border ${book.status === "Reading"
                                ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                                : "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400"
                            }`}
                        animate={book.status === "Reading" ? {
                            scale: [1, 1.05, 1],
                        } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        {book.status === "Reading" && "📖 "}{book.status}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    </BlurFade>
);

// Animated movie card
const MovieCard = ({ movie, index }: { movie: typeof EXTRAS_DATA.movies[0]; index: number }) => (
    <BlurFade delay={BLUR_FADE_DELAY * 9 + index * 0.08}>
        <motion.div
            className="group flex items-center justify-between p-4 rounded-xl bg-foreground/[0.02] backdrop-blur-sm border border-border/50 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {/* Background glow on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.03), transparent 50%)",
                }}
            />

            <div className="flex items-center gap-4 relative">
                <motion.div
                    className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm border border-border/50 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                >
                    <Film className="w-6 h-6 text-muted-foreground" />
                </motion.div>
                <div>
                    <h3 className="text-sm font-semibold group-hover:text-foreground/80 transition-colors duration-300">
                        {movie.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{movie.year} • {movie.genre}</p>
                </div>
            </div>

            <motion.div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 backdrop-blur-sm border border-border/50 relative"
                whileHover={{ scale: 1.1 }}
            >
                <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                >
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </motion.div>
                <span className="text-sm font-bold">{movie.rating}</span>
            </motion.div>
        </motion.div>
    </BlurFade>
);

export default function ExtrasPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12">
            {/* Header */}
            <section id="extras-header">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="space-y-4">
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full bg-foreground/5 border border-border/50 backdrop-blur-sm px-4 py-1.5 text-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <Heart className="w-4 h-4 text-muted-foreground" />
                            </motion.div>
                            <span className="font-medium text-muted-foreground">
                                Personal Favorites
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-4xl font-bold tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Beyond Code{" "}
                            <motion.span
                                className="inline-block"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                            >
                                ✨
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-muted-foreground max-w-[600px] text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            A glimpse into my interests outside of programming. Animes that inspired me,
                            books that shaped my thinking, and movies I absolutely love.
                        </motion.p>
                    </div>
                </BlurFade>
            </section>

            {/* Anime Section */}
            <section id="anime">
                <SectionHeader icon={Tv} title="Anime" delay={BLUR_FADE_DELAY * 2} />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {EXTRAS_DATA.anime.map((anime, index) => (
                        <AnimeCard key={anime.title} anime={anime} index={index} />
                    ))}
                </div>
            </section>

            {/* Books Section */}
            <section id="books">
                <SectionHeader icon={BookOpen} title="Books" delay={BLUR_FADE_DELAY * 5} />
                <div className="grid gap-3">
                    {EXTRAS_DATA.books.map((book, index) => (
                        <BookCard key={book.title} book={book} index={index} />
                    ))}
                </div>
            </section>

            {/* Movies Section */}
            <section id="movies">
                <SectionHeader icon={Film} title="Movies" delay={BLUR_FADE_DELAY * 8} />
                <div className="grid gap-3">
                    {EXTRAS_DATA.movies.map((movie, index) => (
                        <MovieCard key={movie.title} movie={movie} index={index} />
                    ))}
                </div>
            </section>

            {/* Footer note */}
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.p
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-full bg-foreground/5 border border-border/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Always open to recommendations!
                    </motion.p>
                </motion.div>
            </BlurFade>
        </main>
    );
}
