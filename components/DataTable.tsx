import FadeIn from './FadeIn';

interface DataTableProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

export default function DataTable({ headers, rows, className }: DataTableProps) {
  return (
    <FadeIn className={className}>
      <div className="overflow-x-auto rounded-xl3 border border-line">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-surface">
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink-light"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-line last:border-0 transition-colors hover:bg-surface/60"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-5 py-3.5 ${j === 0 ? 'font-medium text-ink' : 'text-ink-light'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
