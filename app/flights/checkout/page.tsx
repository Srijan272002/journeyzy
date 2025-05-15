"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Luggage, Shield, ArrowRight } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Flight Summary */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-xl font-semibold">Return</h1>
          <div className="text-sm text-gray-500">
            Fri, 16 May 2025 - Sat, 17 May 2025 • 1 Passenger • Economy
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">NYC → LON</div>
          <div className="text-sm text-gray-500">
            This offer will expire on 16/05/2025, 04:11
          </div>
        </div>
      </div>

      {/* Selected Flights */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">Selected flights</h2>
        
        {/* Outbound Flight */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <img src="/iberia-logo.svg" alt="Iberia" className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Fri, 16 May 2025</span>
                <span className="text-gray-500">11:36 - 00:37+1</span>
                <span className="text-sm text-gray-500">08h 01m</span>
                <span className="text-sm text-gray-500">Non-stop</span>
              </div>
              <div className="text-sm text-gray-600">NYS - LGW</div>
            </div>
          </div>
          
          <div className="pl-12 space-y-2">
            <div className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              <div>
                <div>Fri, 16 May 2025, 11:36</div>
                <div className="text-sm text-gray-500">
                  Depart from New York Skyports Seaplane Base Airport (NYS), Terminal 2
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 pl-6">Flight duration: 08h 01m</div>
            <div className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              <div>
                <div>Sat, 17 May 2025, 00:37</div>
                <div className="text-sm text-gray-500">
                  Arrive at Gatwick Airport (LGW), Terminal 1
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 pl-6">
              <span>Economy</span>
              <span>Iberia</span>
              <span>IB3167</span>
              <span>1 carry-on bag</span>
              <span>1 checked bag</span>
            </div>
          </div>

          <div className="pl-12 mt-4 p-4 bg-green-50 rounded-lg">
            <div className="text-green-700 font-medium mb-2">Flight change policy</div>
            <div className="text-sm text-green-600">
              Make changes to this flight up until the departure date (a change penalty of £70.00 will apply)
            </div>
          </div>
        </div>

        {/* Return Flight */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img src="/iberia-logo.svg" alt="Iberia" className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Sat, 17 May 2025</span>
                <span className="text-gray-500">12:23 - 15:25</span>
                <span className="text-sm text-gray-500">08h 02m</span>
                <span className="text-sm text-gray-500">Non-stop</span>
              </div>
              <div className="text-sm text-gray-600">BQH - EWR</div>
            </div>
          </div>

          <div className="pl-12 space-y-2">
            <div className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              <div>
                <div>Sat, 17 May 2025, 12:23</div>
                <div className="text-sm text-gray-500">
                  Depart from London Biggin Hill Airport (BQH), Terminal 2
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 pl-6">Flight duration: 08h 02m</div>
            <div className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              <div>
                <div>Sat, 17 May 2025, 15:25</div>
                <div className="text-sm text-gray-500">
                  Arrive at Newark Liberty International Airport (EWR), Terminal 1
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 pl-6">
              <span>Economy</span>
              <span>Iberia</span>
              <span>IB3167</span>
              <span>1 carry-on bag</span>
              <span>1 checked bag</span>
            </div>
          </div>

          <div className="pl-12 mt-4 p-4 bg-green-50 rounded-lg">
            <div className="text-green-700 font-medium mb-2">Flight change policy</div>
            <div className="text-sm text-green-600">
              Make changes to this flight up until the departure date (a change penalty of £70.00 will apply)
            </div>
          </div>
        </div>
      </div>

      {/* Order Policies */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-700 font-medium mb-2">Order change policy</div>
          <div className="text-sm text-green-600">
            Make changes to this order up until the initial departure date (a change penalty of £70.00 will apply)
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-700 font-medium mb-2">Order refund policy</div>
          <div className="text-sm text-green-600">
            This order is refundable up until the initial departure date (a refund penalty of £70.00 will apply)
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Paying now, or later?</h2>
        <p className="text-gray-600 mb-4">
          Decide whether you want to pay for your trip now in its entirety, or whether you'd like to put a hold on the order, and pay at a later date. Be aware that you cannot currently select seats or baggage when holding an order.
        </p>
        <RadioGroup defaultValue="pay-now" className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <RadioGroupItem value="pay-now" id="pay-now" className="mt-1" />
              <div>
                <Label htmlFor="pay-now" className="font-medium">Pay now</Label>
                <p className="text-sm text-gray-600">Pay now and confirm seat and baggage selection</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <RadioGroupItem value="hold-order" id="hold-order" className="mt-1" />
              <div>
                <Label htmlFor="hold-order" className="font-medium">Hold order</Label>
                <p className="text-sm text-gray-600">Hold price and space and pay at a later date</p>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Contact Details */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Contact details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone number *</Label>
            <Input id="phone" type="tel" placeholder="+1 617 756 2626" />
          </div>
        </div>
      </div>

      {/* Passengers */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">Passengers</h2>
        <div className="mb-4">Adult 1</div>

        {/* Personal Details */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-4">Personal details</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Mr." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="dr">Dr.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="given-name">Given name *</Label>
              <Input id="given-name" />
            </div>
            <div>
              <Label htmlFor="family-name">Family name *</Label>
              <Input id="family-name" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="dob">Date of birth *</Label>
              <Input id="dob" placeholder="DD / MM / YYYY" />
            </div>
            <div>
              <Label htmlFor="gender">Gender *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Male" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Passport Details */}
        <div>
          <h3 className="text-md font-medium mb-4">Passport details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country">Country of issue</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  {/* Add more countries */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="passport-number">Passport number</Label>
              <Input id="passport-number" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="expiry">Expiry date</Label>
              <Input id="expiry" placeholder="DD / MM / YYYY" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Extras */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Add extras</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <Luggage className="h-6 w-6 text-gray-500" />
              <div>
                <div className="font-medium">Extra baggage</div>
                <div className="text-sm text-gray-600">Add any extra baggage you need for your trip</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">Not available</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
              <div>
                <div className="font-medium">Seat selection</div>
                <div className="text-sm text-gray-600">Specify where on the plane you'd like to sit</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">Not available</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <Shield className="h-6 w-6 text-gray-500" />
              <div>
                <div className="font-medium">Cancel for any reason</div>
                <div className="text-sm text-gray-600">Protect your purchase if you decide to cancel</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">Not available</div>
          </div>
        </div>
      </div>

      {/* Add Metadata */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Add metadata</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="key">Key (optional)</Label>
            <Input id="key" />
          </div>
          <div>
            <Label htmlFor="value">Value (optional)</Label>
            <Input id="value" />
          </div>
        </div>
        <Button variant="link" className="mt-2 text-blue-600">
          Add another key/value pair
        </Button>
      </div>

      {/* Payment */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Fare</span>
            <span>455.96</span>
          </div>
          <div className="flex justify-between">
            <span>Fare taxes</span>
            <span>82.07</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Total (USD)</span>
            <span>538.03</span>
          </div>
        </div>
        <Button className="w-full bg-black text-white hover:bg-gray-800">
          Pay with Balance
        </Button>
      </div>
    </div>
  );
} 