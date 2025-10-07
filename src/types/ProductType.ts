type Producttype = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    tags: { id: number; name: string }[];
};

export type { Producttype };
