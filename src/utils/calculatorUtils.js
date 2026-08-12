/**
 * Pure mathematical functions for agency marketing growth calculations.
 */

/**
 * Calculates estimated revenue lift and ROI metrics based on ad spend, current conversion rate, and average order/deal value.
 * @param {number} monthlySpend - Current monthly marketing ad spend in USD
 * @param {number} currentConversionRate - Current website conversion rate percentage (e.g. 1.5 for 1.5%)
 * @param {number} avgDealValue - Average customer order or contract value in USD
 * @returns {object} Calculated growth projections
 */
export function calculateMarketingRoi(monthlySpend, currentConversionRate, avgDealValue) {
  const spend = Math.max(500, Number(monthlySpend) || 5000);
  const convRate = Math.max(0.1, Number(currentConversionRate) || 1.5);
  const dealVal = Math.max(10, Number(avgDealValue) || 250);

  // Agency benchmarks: Average projected conversion rate improvement (+0.85% absolute shift) & CPC efficiency gain (+25%)
  const projectedConvRate = Number((convRate + 0.85).toFixed(2));
  const estimatedTraffic = Math.round(spend / 2.2); // Est $2.20 avg cost per click

  const currentLeads = Math.round((estimatedTraffic * convRate) / 100);
  const projectedLeads = Math.round((estimatedTraffic * projectedConvRate) / 100);

  const currentRevenue = currentLeads * dealVal;
  const projectedRevenue = projectedLeads * dealVal;
  const netRevenueGrowth = Math.max(0, projectedRevenue - currentRevenue);

  const projectedRoas = Number(((projectedRevenue / spend)).toFixed(1));

  return {
    monthlySpend: spend,
    currentConversionRate: convRate,
    projectedConversionRate: projectedConvRate,
    avgDealValue: dealVal,
    estimatedTraffic,
    currentLeads,
    projectedLeads,
    currentRevenue,
    projectedRevenue,
    netRevenueGrowth,
    projectedRoas
  };
}
