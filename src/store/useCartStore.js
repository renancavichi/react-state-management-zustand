import create from 'zustand'

export const useCartStore = create((set) => ({
    numItems: 0,
    items: [],
    addItem: (id) => set((state) => {
        if (!state.items.includes(id)) {
            return { numItems: state.numItems + 1, items: [...state.items, id] }
        } else {
            return {}
        }    
    }),
    removeAll: () => set({
        numItems: 0,
        items: []
    })
}))