
  export interface Plan {
    name: string;
    icon: React.ElementType;
    color: string;
    borderColor: string;
    bgColor: string;
    textColor: string;
    monthlyPrice: number;
    annualPrice: number;
    description: string;
    popular?: boolean;
    features: string[];
    limitations: string[];
  }