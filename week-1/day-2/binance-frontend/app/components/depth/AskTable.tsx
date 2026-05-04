import { useState } from 'react';

//@ts-ignore
export const AskTable = ({ asks, hoveredIndex, setHoveredIndex }: { asks: [string, string][], hoveredIndex: number, setHoveredIndex }) => {
    let currentTotal = 0;
    const relevantAsks = asks.slice(0, 25);
    relevantAsks.reverse();
    const asksWithTotal: [string, string, number][] = relevantAsks.map(([price, quantity]) => [price, quantity, currentTotal += Number(quantity)]);
    const maxTotal = relevantAsks.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);
    asksWithTotal.reverse();

    return <div className="hover:cursor-pointer">
        {asksWithTotal.map(([price, quantity, total], index) => <Ask index={index} maxTotal={maxTotal} key={price} price={price} quantity={quantity} total={total} />)}
    </div>
}
function Ask({index, price, quantity, total, maxTotal}: {index: number, price: string, quantity: string, total: number, maxTotal: number}) {


//     return <div
//     style={{
//         display: "flex",
//         position: "relative",
//         width: "100%",
//         backgroundColor: "transparent",
//         overflow: "hidden",
//     }}
// >
//     <div
//         style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: `${(100 * total) / maxTotal}%`,
//         height: "100%",
//         background: "rgba(228, 75, 68, 0.325)",
//         transition: "width 0.3s ease-in-out",
//         }}
//     ></div>
//     <div className="flex justify-between text-xs w-full">
//         <div>
//             {price}
//         </div>
//         <div>
//             {quantity}
//         </div>
//         <div>
//             {total?.toFixed(2)}
//         </div>
//     </div>
//     </div>

    const [hoveredIndex, setHoveredIndex] = useState(-1);
    
    return (
        <tr key={index} className="flex relative justify-between  text-xs text-center pt-1 hover:border-t hover:border-dashed hover:border-baseBorderFocus/50"
            onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(-1)}
            style={{ backgroundColor: index >= hoveredIndex ? "bg-white/5" : ""}}>
            <div className="absolute top-0 right-0 h-full pt-1 bg-red-600 bg-opacity-30 transition-all ease-in-out duration-300"
                 style={{ width: `${(100 * total) / maxTotal}%`, backgroundClip: "content-box" }}></div>
            <td className="px-2 text-[#ff4d4d]">{price}</td>
            <td className="px-2">{quantity}</td>
            <td className="px-2">
              {/* <div className="relative w-full h-6 bg-[#591818]">
                <div className="absolute top-0 right-0 h-full bg-[#ff4d4d]" style={{ width: "100%" }} />
                <span className="relative z-10">{total?.toFixed(2)}</span>
              </div> */}
              {total?.toFixed(2)}
            </td>
        </tr>
    )
}