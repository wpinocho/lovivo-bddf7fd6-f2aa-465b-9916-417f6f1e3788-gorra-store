import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20 border-y border-primary/20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/20 rounded-full p-4">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-foreground">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-muted-foreground text-lg">
                  Pronto recibirás nuestras mejores ofertas y promociones exclusivas.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-black text-foreground">
                    ¿Quieres ofertas exclusivas?
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Suscríbete y recibe descuentos especiales en tu email
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 h-12 text-base"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    size="lg"
                    className="sm:w-auto font-bold"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};