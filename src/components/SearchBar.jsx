import { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ onSearch, onClear }) {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        onSearch(search);
    };

    const handleClear = () => {
        setSearch("");
        onClear();
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center gap-6">
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Search by category or title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full rounded-3xl border-2 border-stone-300 bg-white h-12 text-xl text-stone-700 placeholder-stone-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>
            <div className="flex gap-3">
                {search && (
                    <button
                        onClick={handleClear}
                        className="p-4 text-stone-400 hover:text-stone-600 hover:bg-stone-200 rounded-full transition"
                        title="Clear search"
                    >
                        <X size={24} />
                    </button>
                )}
                <button
                    onClick={handleSearch}
                    className="text-blue-500 hover:bg-blue-300 rounded-full transition shadow-md hover:shadow-lg"
                    title="Search projects"
                >
                    <Search size={28} />
                </button>
            </div>
        </div>
    );
}