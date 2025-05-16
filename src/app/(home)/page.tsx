"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


const Home = () => {

  return (
<>
<h1 className="text-8xl flex justify-center">DIC PROJECT</h1>
<Link className="flex justify-center mt-10" href="dashboard"><Button>Go Dashboard</Button></Link>
</>
  );
};

export default Home;
