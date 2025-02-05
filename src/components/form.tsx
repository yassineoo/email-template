"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

export default function Form() {
  const [state, formAction] = useFormState(() => {}, null);
  const [fileName, setFileName] = useState("");

  return (
    <form
      action={formAction}
      className="space-y-6 bg-white shadow-xl rounded-xl p-8"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required placeholder="John Doe" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fileNumber">File Processing Number</Label>
        <Input
          id="fileNumber"
          name="fileNumber"
          required
          placeholder="FPN-12345"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">Upload File</Label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                {fileName || "PDF, DOC, or TXT (MAX. 10MB)"}
              </p>
            </div>
            <Input
              id="file"
              name="file"
              type="file"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>

      {true && <p className="text-green-600 text-center">{state || ""}</p>}
    </form>
  );
}
