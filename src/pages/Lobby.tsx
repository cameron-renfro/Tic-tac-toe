import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters',
  }),
});

const Lobby = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'What is your username?',
    },
  });

  const handleSubmit = () => {
    // To-do: Setup Submit handler
    // To-do: Update Fields
    // To-do: Update Styles
    // To-do: Add secondary field
    // To-do: Determine how data will Persist
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Lobby;
