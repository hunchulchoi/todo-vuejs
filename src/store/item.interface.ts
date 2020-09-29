export interface Item{
  id: number,
  title: string,
  status: 'active' | 'clear',
}

export default interface State{
  itemList: Item[],
}
