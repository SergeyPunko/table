import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Zap, X, User, Phone, Mail, Calendar, Clock, Users, MapPin, ChevronDown, Edit3, Check, ChevronUp } from 'lucide-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(LucideAngularModule.pick({
      Zap,
      X,
      User,
      Phone,
      Mail,
      Calendar,
      Clock,
      Users,
      MapPin,
      ChevronDown,
      ChevronUp,
      Check,
      Edit3
    })),
    provideEventPlugins()
  ],
}).catch(err => console.error(err));