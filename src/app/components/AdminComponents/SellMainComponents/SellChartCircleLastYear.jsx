  "use client";

  import * as React from "react";

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
  import { Label, Pie, PieChart } from "recharts";
  import { TrendingUp } from "lucide-react";

  const chartData = [
    {
      product: "Café Expresso",
      sells: 500,
      fill: "var(--color-expressCoffee)",
    },
    {
      product: "Cappuccino c/ calda",
      sells: 400,
      fill: "var(--color-cappuccino)",
    },
    {
      product: "Pão de Queijo",
      sells: 300,
      fill: "var(--color-paodequeijo)",
    },
    {
      product: "Café Coado",
      sells: 500,
      fill: "var(--color-coadoCoffee)",
    },
    {
      product: "Café Latte",
      sells: 300,
      fill: "var(--color-latteCoffee)",
    },
  ];

  const chartConfig = {
    produtos: {
      label: "Produtos",
    },
    ExpressCoffe: {
      label: "Café Expresso",
      color: "hsl(var(--chart-1))",
    },
    CappuccinoWithCald: {
      label: "Cappuccino c/ calda",
      color: "hsl(var(--chart-2))",
    },
    PaoDeQueijo: {
      label: "Pão de Queijo",
      color: "hsl(var(--chart-3))",
    },
    CoadoCoffe: {
      label: "Café Coado",
      color: "hsl(var(--chart-4))",
    },
    LatteCofe: {
      label: "Café Latte",
      color: "hsl(var(--chart-5))",
    },
  };

  export default function SellChartCircleLastYear() {
    const totalProducts = React.useMemo(() => {
      return chartData.reduce((acc, curr) => acc + curr.sells, 0);
    }, []); 
    return (
      <Card className="flex flex-col bg-zinc-700 text-white w-96">
        <CardHeader className="items-center pb-0">
          <CardTitle>Gráfico de vendas deste ano</CardTitle>
          <CardDescription>
            Gráfico de vendas deste ano, com os principais produtos.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="sells"
                nameKey="product"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-white text-3xl font-bold "
                          >
                            {totalProducts.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Produtos
                          </tspan>
                        </text>
                      );
                    }
                    return null
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Tivemos um aumento de 5.2% nas vendas totais.
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            O grafico fica com
          </div>
        </CardFooter>
      </Card>
    );
  }
