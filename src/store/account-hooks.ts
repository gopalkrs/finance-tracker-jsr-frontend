import { useFormContext, useWatch } from "react-hook-form";

export function useReviewFields(fields: string[], control: any) {

  return useWatch({
    control,
    name: fields,
  });
}
