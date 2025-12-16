import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group bg-card border hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Sin imagen
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-black text-2xl text-foreground line-clamp-1">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-bold">
                Destacado
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            Ver Productos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}