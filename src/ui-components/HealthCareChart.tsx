import Image from 'next/image';

import healthCareChart from '../../public/assets/images/heathcare_chart.svg';

interface HealthCareChartProps {
  className?: string;
}

const HealthCareChart = (props: HealthCareChartProps) => (
  <Image
    src={healthCareChart}
    alt="Healthcare Chart"
    className={props.className}
  />
);

export { HealthCareChart };
