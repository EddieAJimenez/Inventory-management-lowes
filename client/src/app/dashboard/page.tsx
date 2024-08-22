"use client";

import CardPopularProducts from "./CardPopularProducts";
import React from "react";
import CardSalesSummary from "./CardSalesSummary";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatCard from "./StatCard";
import { CheckCircle2Icon, Package, SparklesIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-5" />}
        dateRange="22 - 29 August 2024"
        details={[
          {
            title: "CUstomers Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUpIcon,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDownIcon,
          },
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle2Icon className="text-blue-600 w-6 h-5" />}
        dateRange="22 - 29 August 2024"
        details={[
          {
            title: "Dues",
            amount: "250",
            changePercentage: 26,
            IconComponent: TrendingUpIcon,
          },
          {
            title: "Pending Orders",
            amount: "147",
            changePercentage: -15,
            IconComponent: TrendingDownIcon,
          },
        ]}
      /><StatCard
      title="Sales & Discounts"
      primaryIcon={<SparklesIcon className="text-blue-600 w-6 h-5" />}
      dateRange="22 - 29 August 2024"
      details={[
        {
          title: "Sales",
          amount: "100.00",
          changePercentage: 20,
          IconComponent: TrendingUpIcon,
        },
        {
          title: "Discounts",
          amount: "200.00",
          changePercentage: -10,
          IconComponent: TrendingDownIcon,
        },
      ]}
    />
    </div>
  );
};

export default Dashboard;
