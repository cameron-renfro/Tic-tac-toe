import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/button.tsx';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '../components/ui/form.tsx';
// import { Input } from '@/components/ui/input';

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
  return (
    <Form>
      {/* <FormField
        control={'...'}
        name='...'
        render={() => (
          <FormItem>
            <FormLabel />
            <FormControl>{form}</FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      /> */}
    </Form>
  );
};

export default Lobby;
