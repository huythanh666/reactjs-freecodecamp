import { useMemo } from "react";

function ExpensiveSquare({ num }) {
  function calculateSquare(n) {
    console.log("Calculating square...");
    return n * n;
  }
  const squared = useMemo(() => calculateSquare(num), [num]);

  return (
    <p>
      Square of {num}: {squared}
    </p>
  );
}
// demo không sử dụng useMemo
// function ExpensiveSquare({ num }) {
//   function calculateSquare(n) {
//     console.log("Calculating square...");
//     return n * n;
//   }

//   const squared = calculateSquare(num);
//   return (
//     <p>
//       Square of {num}: {squared}
//     </p>
//   );
// }
export default ExpensiveSquare;