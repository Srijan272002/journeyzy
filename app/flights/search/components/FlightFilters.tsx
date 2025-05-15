import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FlightFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function FlightFilters({ onFilterChange }: FlightFiltersProps) {
  return (
    <div className="w-72 bg-white rounded-lg p-6 space-y-6">
      {/* Trip Summary */}
      <div className="space-y-2">
        <h2 className="font-semibold">Round trip to LON</h2>
        <p className="text-sm text-gray-500">16 May - 17 May • 1 Passenger</p>
        <p className="text-sm text-gray-500">Economy</p>
        <Button variant="outline" className="w-full mt-2">
          Edit search
        </Button>
      </div>

      <div className="h-px bg-gray-200" />

      {/* Sort Options */}
      <div className="space-y-4">
        <h3 className="font-medium">Sort by</h3>
        <RadioGroup defaultValue="least-expensive">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="least-expensive" id="least-expensive" />
            <Label htmlFor="least-expensive">Least expensive</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="most-expensive" id="most-expensive" />
            <Label htmlFor="most-expensive">Most Expensive</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="shortest-duration" id="shortest-duration" />
            <Label htmlFor="shortest-duration">Shortest duration</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="longest-duration" id="longest-duration" />
            <Label htmlFor="longest-duration">Longest duration</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="h-px bg-gray-200" />

      {/* Stops Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Stops</h3>
        <RadioGroup defaultValue="any">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="direct" id="direct" />
            <Label htmlFor="direct">Direct only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1-stop" id="1-stop" />
            <Label htmlFor="1-stop">1 stop at most</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2-stops" id="2-stops" />
            <Label htmlFor="2-stops">2 stops at most</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="any" id="any" />
            <Label htmlFor="any">Any number of stops</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="h-px bg-gray-200" />

      {/* Airlines Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Airlines</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All airlines" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All airlines</SelectItem>
            <SelectItem value="iberia">Iberia</SelectItem>
            <SelectItem value="american">American Airlines</SelectItem>
            <SelectItem value="british">British Airways</SelectItem>
            <SelectItem value="duffel">Duffel Airways</SelectItem>
            <SelectItem value="sas">SAS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-px bg-gray-200" />

      {/* Flight Number */}
      <div className="space-y-4">
        <h3 className="font-medium">Flight number</h3>
        <Input placeholder="e.g., IB3167" />
      </div>

      <div className="h-px bg-gray-200" />

      {/* Flight Time */}
      <div className="space-y-4">
        <h3 className="font-medium">Flight time</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Take-off</Label>
              <span className="text-sm text-gray-500">at any time</span>
            </div>
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>00:00</span>
              <span>08:00</span>
              <span>16:00</span>
              <span>23:59</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Landing</Label>
              <span className="text-sm text-gray-500">at any time</span>
            </div>
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>00:00</span>
              <span>08:00</span>
              <span>16:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 