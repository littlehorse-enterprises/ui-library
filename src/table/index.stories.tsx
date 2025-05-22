import type { Meta, StoryObj } from "@storybook/react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "."

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const WithSelection: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <input type="checkbox" />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Design System</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Completed
            </span>
          </TableCell>
          <TableCell>High</TableCell>
          <TableCell>2024-03-15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">API Integration</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
              In Progress
            </span>
          </TableCell>
          <TableCell>Medium</TableCell>
          <TableCell>2024-03-20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Testing</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
              Blocked
            </span>
          </TableCell>
          <TableCell>High</TableCell>
          <TableCell>2024-03-25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Product A</TableCell>
          <TableCell>$99.99</TableCell>
          <TableCell>In Stock</TableCell>
          <TableCell className="text-right">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
            <button className="ml-4 text-red-600 hover:text-red-800">Delete</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Product B</TableCell>
          <TableCell>$149.99</TableCell>
          <TableCell>Low Stock</TableCell>
          <TableCell className="text-right">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
            <button className="ml-4 text-red-600 hover:text-red-800">Delete</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Table className="border-collapse border border-gray-200">
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="border border-gray-200">Name</TableHead>
          <TableHead className="border border-gray-200">Age</TableHead>
          <TableHead className="border border-gray-200">Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="border border-gray-200">Alice Johnson</TableCell>
          <TableCell className="border border-gray-200">28</TableCell>
          <TableCell className="border border-gray-200">New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray-200">Bob Smith</TableCell>
          <TableCell className="border border-gray-200">34</TableCell>
          <TableCell className="border border-gray-200">Los Angeles</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
} 