import { Save } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

import IconFrame from "./IconFrame";

export default function Submit(): React.JSX.Element {
  const { pending } = useFormStatus();
  return (
    <IconFrame>
      <button
        className="disabled:cursor-not-allowed disabled:text-gray-300"
        disabled={pending}
        type="submit"
      >
        <Save size={16} />
      </button>
    </IconFrame>
  );
}
