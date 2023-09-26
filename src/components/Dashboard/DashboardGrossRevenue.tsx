interface Props {
  value: number;
}
export function DashboardGrossRevenue({ value }: Props) {
  function formatMoney(amount: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  }
  return (
    <div className="bg-gray-200 aspect-square h-full flex flex-col justify-center items-center">
      Faturamento do dia:
      <span className={value > 0 ? 'text-green-400' : 'text-red-400'}>{formatMoney(value)}</span>
    </div>
  );
}
