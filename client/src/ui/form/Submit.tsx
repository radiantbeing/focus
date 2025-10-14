import { Save } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

import IconButton from "../button/IconButton";

export default function Submit(): React.JSX.Element {
  const { pending } = useFormStatus();
  return (
    <IconButton disabled={pending} icon={<Save size={16} />} type="submit" />
  );
}
