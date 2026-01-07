"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import payrollPic from "@/components/images/payrollPic.png";
import employeesPic from "@/components/images/employeesPic.png";
import Link from "next/link";
import { ArrowRight, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/30 via-purple-300/30 to-cyan-300/30 blur-2xl"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/50 to-white/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-7xl font-extrabold tracking-tight text-zinc-900 sm:text-8xl lg:text-9xl mb-6">
              <span className="text-blue-600">Wage</span>Wire
            </h1>

            <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl">
              <span className="text-blue-600">Run Payroll</span> in minutes!
            </h2>

            <p className="text-xl font-light text-zinc-600 max-w-2xl mx-auto">
              Wage Wire is the easiest way to run payroll. Try it out!
            </p>

            <div className="flex items-center justify-center space-x-4 pt-4">
              <SignedIn>
                <Link href={"/onboarding"}>
                  <Button
                    size={"lg"}
                    className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link href={"/clerk/sign-up"}>
                  <Button
                    size={"lg"}
                    className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Sign Up <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-white shadow-2xl overflow-hidden border border-zinc-200">
                <Image
                  src={payrollPic}
                  alt="payroll dashboard"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            {/* Decorative background elements behind image */}
            <div className="absolute -top-24 -left-20 -z-10 opacity-30 blur-3xl">
              <div className="aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
            </div>
            <div className="absolute -bottom-24 -right-20 -z-10 opacity-30 blur-3xl">
              <div className="aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Don&#39;t worry about taxes
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              We&#39;ll take care of that too !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <FileText className="h-6 w-6" />
                  {/* Fallback icon if Lucide FileText isn't imported, but I used generic icons in import */}
                </div>
                <div className="text-sm font-medium text-blue-600 mb-2">
                  Step 1
                </div>
                <CardTitle className="text-xl">
                  Streamlined Document Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  All essential forms, including I-9s, W-2s, and 1099s, are
                  securely stored and easily accessible online.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="text-sm font-medium text-blue-600 mb-2">
                  Step 2
                </div>
                <CardTitle className="text-xl">
                  Nationwide State Tax Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  Get the tools you need to register for state taxes in every
                  state, tailored to where your team resides and operates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="text-sm font-medium text-blue-600 mb-2">
                  Step 3
                </div>
                <CardTitle className="text-xl">
                  Automated Tax Calculations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">
                  Stay compliant with ever-changing tax laws through our
                  automatic calculation system, reducing errors.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-24 mx-auto max-w-5xl">
            <div className="rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-white shadow-2xl overflow-hidden border border-zinc-200">
                <Image
                  src={employeesPic}
                  alt="employees dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Space */}
      <footer className="py-12 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} WageWire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FileText(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}
