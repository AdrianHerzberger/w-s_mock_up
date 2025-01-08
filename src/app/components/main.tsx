"use client";

import { useJoke } from "../hooks/useJoke";
import Image from "next/image";
import catBin from "../../../public/cat_bin.jpg"

export const Content = () => {
    const { joke, loading, error, getJoke } = useJoke();

    return (
        <main className="flex flex-row gap-8 items-center">
            <Image
                src={catBin} alt={"cat"}
                width={200}
                priority
            />

            <div className="mx-auto flex flex-col gap-2 items-center row-start-1 ">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && <p>{joke}</p>}

                <button
                    onClick={getJoke}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Get Another Joke
                </button>
            </div>
        </main>
    );
}

