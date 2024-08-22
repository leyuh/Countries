"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search({ namesData }) {
    const [searchInput, setSearchInput] = useState(null);
    const router = useRouter();

    const filterResults = (search, data) => {
        if (search == null) return data;

        return data.filter(name => name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

    return <>
        <div>
            <input 
                type="text" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>

        <div>
            {filterResults(searchInput, namesData).map((name, i) => (
                <button onClick={() => {
                    router.push(`/country/${name}`);
                }}>{name}</button>
            ))}
        </div>
    </>
}