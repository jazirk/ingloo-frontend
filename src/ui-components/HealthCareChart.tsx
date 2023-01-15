import healthCareChart from '../../public/assets/images/heathcare_chart.svg';

interface HealthCareChartProps {
  className?: string;
}

const HealthCareChart = (props: HealthCareChartProps) => (
  <img
    src={healthCareChart.src}
    alt="Healthcare Chart"
    className={props.className}
  />
);

export { HealthCareChart };
