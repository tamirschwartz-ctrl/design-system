import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SegmentedButton, SegmentedButtonItem } from "./segmented-button";

/**
 * # Segmented Button
 *
 * A single-select component with 2-5 segments, supporting primary and secondary design variants.
 * Each segment can be selected independently, with only one active at a time.
 *
 * ## Features
 * - Single-select behavior (only one segment active)
 * - Primary and secondary design variants
 * - Support for 2-5 flexible segments
 * - Smooth hover effects and transitions
 * - Visual dividers between segments
 * - Full accessibility with ARIA attributes
 * - Controlled and uncontrolled state patterns
 *
 * ## Usage
 * ```tsx
 * <SegmentedButton variant="primary" defaultValue="medium">
 *   <SegmentedButtonItem value="small" label="Small" />
 *   <SegmentedButtonItem value="medium" label="Medium" />
 *   <SegmentedButtonItem value="large" label="Large" />
 * </SegmentedButton>
 * ```
 */

const meta = {
  title: "Components/Button/Segmented Button",
  component: SegmentedButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A single-select segmented button component with 2-5 flexible segments. Supports primary and secondary variants with full accessibility.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "The design variant of the segmented button",
      table: {
        type: { summary: '"primary" | "secondary"' },
        defaultValue: { summary: '"primary"' },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "default", "lg"],
      description: "The size of the button segments",
      table: {
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the entire segmented button group",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultValue: {
      control: "text",
      description: "The initial selected segment value",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof SegmentedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default: 3-segment primary button
export const Default: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="small" label="Small" />
      <SegmentedButtonItem value="medium" label="Medium" />
      <SegmentedButtonItem value="large" label="Large" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "default",
    defaultValue: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "Default segmented button with primary variant and 3 size options (Small, Medium, Large).",
      },
    },
  },
};

// Primary Variant: 4-segment view options
export const PrimaryVariant: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="list" label="List" />
      <SegmentedButtonItem value="grid" label="Grid" />
      <SegmentedButtonItem value="table" label="Table" />
      <SegmentedButtonItem value="compact" label="Compact" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "default",
    defaultValue: "grid",
  },
  parameters: {
    docs: {
      description: {
        story: "Primary variant segmented button with 4 view layout options (List, Grid, Table, Compact).",
      },
    },
  },
};

// Secondary Variant: Time period selection
export const SecondaryVariant: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="day" label="Day" />
      <SegmentedButtonItem value="week" label="Week" />
      <SegmentedButtonItem value="month" label="Month" />
      <SegmentedButtonItem value="year" label="Year" />
    </SegmentedButton>
  ),
  args: {
    variant: "secondary",
    size: "default",
    defaultValue: "week",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant segmented button with 4 time period options (Day, Week, Month, Year).",
      },
    },
  },
};

// Size: Small
export const SizeSmall: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="small" label="Small" />
      <SegmentedButtonItem value="medium" label="Medium" />
      <SegmentedButtonItem value="large" label="Large" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "sm",
    defaultValue: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "Small size variant with compact padding and font size.",
      },
    },
  },
};

// Size: Large
export const SizeLarge: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="small" label="Small" />
      <SegmentedButtonItem value="medium" label="Medium" />
      <SegmentedButtonItem value="large" label="Large" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "lg",
    defaultValue: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "Large size variant with generous padding and font size.",
      },
    },
  },
};

// Flexibility: 2 Segments (minimum)
export const TwoSegments: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="on" label="On" />
      <SegmentedButtonItem value="off" label="Off" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "default",
    defaultValue: "on",
  },
  parameters: {
    docs: {
      description: {
        story: "Segmented button with minimum 2 segments (On/Off toggle pattern).",
      },
    },
  },
};

// Flexibility: 5 Segments (maximum)
export const FiveSegments: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="option1" label="Option 1" />
      <SegmentedButtonItem value="option2" label="Option 2" />
      <SegmentedButtonItem value="option3" label="Option 3" />
      <SegmentedButtonItem value="option4" label="Option 4" />
      <SegmentedButtonItem value="option5" label="Option 5" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "default",
    defaultValue: "option3",
  },
  parameters: {
    docs: {
      description: {
        story: "Segmented button with maximum 5 segments for complex selections.",
      },
    },
  },
};

// Controlled State: Interactive with useState
export const ControlledState: Story = {
  render: () => {
    const [selected, setSelected] = useState("medium");

    return (
      <div className="space-y-4">
        <SegmentedButton
          variant="primary"
          value={selected}
          onValueChange={setSelected}
        >
          <SegmentedButtonItem value="small" label="Small" />
          <SegmentedButtonItem value="medium" label="Medium" />
          <SegmentedButtonItem value="large" label="Large" />
        </SegmentedButton>
        <p className="text-sm text-foreground/70">
          Currently selected: <strong>{selected}</strong>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled component example showing how to manage state with value and onValueChange props. The selected value is displayed below the button.",
      },
    },
  },
};

// Disabled: Entire group
export const DisabledGroup: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="small" label="Small" />
      <SegmentedButtonItem value="medium" label="Medium" />
      <SegmentedButtonItem value="large" label="Large" />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "default",
    defaultValue: "medium",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state for the entire segmented button group. All segments appear dimmed and non-interactive.",
      },
    },
  },
};

// Disabled: Individual items
export const DisabledItems: Story = {
  render: (args) => (
    <SegmentedButton {...args}>
      <SegmentedButtonItem value="small" label="Small" />
      <SegmentedButtonItem value="medium" label="Medium" disabled />
      <SegmentedButtonItem value="large" label="Large" disabled />
    </SegmentedButton>
  ),
  args: {
    variant: "primary",
    size: "default",
    defaultValue: "small",
  },
  parameters: {
    docs: {
      description: {
        story: "Some segments disabled individually while others remain interactive.",
      },
    },
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-foreground mb-2">Small</p>
        <SegmentedButton variant="primary" size="sm" defaultValue="medium">
          <SegmentedButtonItem value="small" label="Small" />
          <SegmentedButtonItem value="medium" label="Medium" />
          <SegmentedButtonItem value="large" label="Large" />
        </SegmentedButton>
      </div>

      <div>
        <p className="text-sm font-medium text-foreground mb-2">Default</p>
        <SegmentedButton variant="primary" size="default" defaultValue="medium">
          <SegmentedButtonItem value="small" label="Small" />
          <SegmentedButtonItem value="medium" label="Medium" />
          <SegmentedButtonItem value="large" label="Large" />
        </SegmentedButton>
      </div>

      <div>
        <p className="text-sm font-medium text-foreground mb-2">Large</p>
        <SegmentedButton variant="primary" size="lg" defaultValue="medium">
          <SegmentedButtonItem value="small" label="Small" />
          <SegmentedButtonItem value="medium" label="Medium" />
          <SegmentedButtonItem value="large" label="Large" />
        </SegmentedButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All three size variants (Small, Default, Large) displayed side-by-side for comparison.",
      },
    },
  },
};

// All Variants Comparison
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-foreground mb-2">Primary</p>
        <SegmentedButton variant="primary" defaultValue="medium">
          <SegmentedButtonItem value="small" label="Small" />
          <SegmentedButtonItem value="medium" label="Medium" />
          <SegmentedButtonItem value="large" label="Large" />
        </SegmentedButton>
      </div>

      <div>
        <p className="text-sm font-medium text-foreground mb-2">Secondary</p>
        <SegmentedButton variant="secondary" defaultValue="medium">
          <SegmentedButtonItem value="small" label="Small" />
          <SegmentedButtonItem value="medium" label="Medium" />
          <SegmentedButtonItem value="large" label="Large" />
        </SegmentedButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Both primary and secondary design variants displayed side-by-side for visual comparison.",
      },
    },
  },
};