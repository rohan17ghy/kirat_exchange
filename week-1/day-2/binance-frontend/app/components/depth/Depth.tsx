"use client";

import { useEffect, useState } from "react";
import { getDepth, getKlines, getTicker, getTrades } from "../../utils/httpClient";
import { BidTable } from "./BidTable";
import { AskTable } from "./AskTable";

export function Depth({ market, className }: {market: string, className: string}) {
    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    useEffect(() => {
        getDepth(market).then(d => {
            setBids(d.bids.reverse());
            setAsks(d.asks);
        });

        getTicker(market).then(t => setPrice(t.lastPrice));
        getTrades(market).then(t => setPrice(t[0].price));
        // getKlines(market, "1h", 1640099200, 1640100800).then(t => setPrice(t[0].close));
    }, [])
    
    return <div className={`${className} overflow-x-auto hide-scrollbar`}>
        <table className="min-w-full bg-[var(--background-color)] text-white">
            <TableHeader />
            <tbody>
                {asks && <AskTable asks={asks} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />}
                {price && <div>{price}</div>}
                {bids && <BidTable bids={bids} />}
            </tbody>
        </table>
    </div>
}

function TableHeader() {
    return <thead className="text-xs">
    <tr className="flex justify-between">
      <th className="py-2 px-2 text-left text-[#ffffff]">Price (USDC)</th>
      <th className="py-2 px-2 text-left text-[#a1a1a1]">Size (SOL)</th>
      <th className="py-2 px-2 text-left text-[#a1a1a1]">Total (SOL)</th>
    </tr>
  </thead>
}