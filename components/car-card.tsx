import { Card, CardContent } from "@/components/ui/card";
import { Car } from "@/types/car";

interface Props {
  car: Car;
}

export function CarCard({ car }: Props) {
  return (
    <Card>
      <CardContent className="p-4">
        {car.imageUrl && (
          <img
            src={car.imageUrl}
            alt={car.title}
            className="h-52 w-full rounded-lg object-cover"
          />
        )}

        <h2 className="mt-4 text-xl font-bold">{car.title}</h2>
        <p>${car.price}</p>
        <p>{car.country}</p>
      </CardContent>
    </Card>
  );
}