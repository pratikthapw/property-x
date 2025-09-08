import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const formSchema = z.object({
  amount: z.coerce
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive({ message: "Amount must be a positive number" })
    .min(1, { message: "Amount must be greater than 0" }),
})

const AddRemoveDialog = ({ type = "add" }) => {
  const [open, setOpen] = useState(false)
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  })

  const onSubmit = (data) => {
    if(type === 'add') {
        // function to add listing
    } else if (type === 'remove') {
        // function to remove listing
    }
    setOpen(false)
    form.reset()
  }

  const actionText = type === "add" ? "Add" : "Remove"
  const title = type === "add" ? "Add Amount" : "Remove Amount"
  const description = type === "add" 
    ? "Enter the amount you want to add." 
    : "Enter the amount you want to remove."

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
       <Button variant="outline" className="w-full">{actionText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.000001"
                      placeholder="Enter amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full">
                {actionText}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddRemoveDialog