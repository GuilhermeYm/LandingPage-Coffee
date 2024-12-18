"use client";

import { LucideTrendingUp } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, CartesianGrid, Bar, XAxis } from "recharts";

const chartData = [
  {
    month: "Janeiro",
    2025: 3232,
    2024: 3232,
  },
  {
    month: "Fevereiro",
    2025: 2890,
    2024: 3000,
  },
  {
    month: "Março",
    2025: 4500,
    2024: 4200,
  },
  {
    month: "Abril",
    2025: 4000,
    2024: 3900,
  },
  {
    month: "Maio",
    2025: 5000,
    2024: 4800,
  },
  {
    month: "Junho",
    2025: 3200,
    2024: 3100,
  },
  {
    month: "Julho",
    2025: 4100,
    2024: 4000,
  },
  {
    month: "Agosto",
    2025: 4700,
    2024: 4500,
  },
  {
    month: "Setembro",
    2025: 5200,
    2024: 5000,
  },
  {
    month: "Outubro",
    2025: 4300,
    2024: 4200,
  },
  {
    month: "Novembro",
    2025: 4600,
    2024: 4400,
  },
  {
    month: "Dezembro",
    2025: 4900,
    2024: 4700,
  },
];

const chartConfig = {
  2025: {
    label: "Este ano - 2025",
    color: "hsl(var(--chart-1))",
  },
  2024: {
    label: "Ano passado - 2024",
    color: "hsl(var(--chart-2))",
  },
};

export default function SellChartLastYear() {
  return (
    <Card className="w-96 bg-zinc-700">
      <CardHeader>
        <CardTitle>Gráfico de vendas</CardTitle>
        <CardDescription>
          Gráfico de vendas deste ano, com o ano passado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="2025" fill="var(--color-2025)" radius={4} />
            <Bar dataKey="2024" fill="var(--color-2024)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tivemos um aumento consideravel, quando comparado ao ano passado <LucideTrendingUp />
        </div>
        <div className="leading-none text-muted-foreground">
          Gráfico mostra a quantidade total de produtos vendido durante um ano
        </div>
      </CardFooter>
    </Card>
  );
}
