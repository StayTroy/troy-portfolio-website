"use client";
import { ColourfulText } from "@/components/HomeTitle/ui/colourful-text";
import "@/components/HomeTitle/styles/texttitle.css"

export function ColourfulTextDemo() {
  return (
        <h1>
            Heya! I'm <ColourfulText text="Troy!" />
        </h1>
  );
}
