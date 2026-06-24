import { render, screen } from '@testing-library/react'
import { Tabs, TabsList, TabsTrigger } from './index'

describe('Tabs', () => {
  it('renders without crashing', () => {
    render(<Tabs />)
  })

  it('applies grid layout classes to horizontal default TabsList', () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
      </Tabs>
    )
    const list = screen.getByRole('tablist')
    expect(list.className).toContain('bg-muted')
    expect(list.className).toContain('group-data-[orientation=horizontal]/tabs:grid')
    expect(list.className).toContain('group-data-[orientation=horizontal]/tabs:w-full')
    expect(list.className).toContain(
      'group-data-[orientation=horizontal]/tabs:grid-cols-[repeat(auto-fit,minmax(0,1fr))]'
    )
  })

  it('does not apply horizontal grid classes to line variant', () => {
    render(
      <Tabs defaultValue="a">
        <TabsList variant="line">
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
      </Tabs>
    )
    const list = screen.getByRole('tablist')
    expect(list.className).not.toContain('group-data-[orientation=horizontal]/tabs:grid')
    expect(list.className).toContain('bg-transparent')
  })

  it('vertical default TabsList still has bg-muted and vertical layout classes', () => {
    render(
      <Tabs defaultValue="a" orientation="vertical">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
      </Tabs>
    )
    const list = screen.getByRole('tablist')
    expect(list.className).toContain('bg-muted')
    expect(list.className).toContain('group-data-[orientation=vertical]/tabs:flex-col')
    expect(list.className).toContain('group-data-[orientation=vertical]/tabs:h-fit')
  })
})
