import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtService } from '../services/jwt.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const currentUrl = state.url;

    if (currentUrl.startsWith('/reset-password')) {
      return true;
    }

    const token = await this.storageService.getItem('jwt_token');
    if (!token) {
      return this.router.parseUrl('/login');
    }

    // Allow /home, /change-password and /reset-password for all logged in users
    if (
      currentUrl.startsWith('/dashboard/home') ||
      currentUrl.startsWith('/dashboard/change-password')
    ) {
      return true;
    }

    const privileges = await this.storageService.getItem('privileges');
    if (!privileges || !Array.isArray(privileges)) {
      return this.router.parseUrl('/login');
    }

    const cleanedUrl = currentUrl.split('?')[0];
    const allowedUrls = privileges.map((p: any) => p.url);
    if (allowedUrls.includes(cleanedUrl)) {
      return true;
    } else {
      return this.router.parseUrl('/dashboard/home');
    }
  }
}
