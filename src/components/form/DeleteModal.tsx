import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { FC } from 'react'
import { Button } from '../shared'

interface DeleteModalProps {
  title: string
  desc: string
  deleteHandler: () => any
}

const DeleteModal: FC<DeleteModalProps> = ({ title, desc, deleteHandler }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="delete" size="xs" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="animate-fade-in-out fixed top-1/2 left-1/2 z-50 max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-md bg-white p-6 text-center shadow-lg">
          <AlertDialog.Title className="text-2xl font-semibold">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="text-base text-neutral-4">
            {desc}
          </AlertDialog.Description>
          <div className="flex gap-4">
            <AlertDialog.Cancel asChild>
              <Button className="w-full">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                className="w-full"
                variant="outline"
                onClick={deleteHandler}
              >
                Delete
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default DeleteModal
