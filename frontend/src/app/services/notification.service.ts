import { Injectable } from '@angular/core';
import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.css';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private defaultClass =
    '-mt-2 -mr-2 shadow-xl rounded border-0 font-medium text-sm';

  private show(
    status: 'success' | 'error' | 'warning' | 'info',
    message: string,
    title?: string,
    className?: string
  ) {
    new Notify({
      status, // 'error', 'warning', 'success', 'info'
      title: title ?? '', // Notification title
      text: message, // Notification message
      effect: 'fade', // Animation effect
      speed: 300, // Animation speed in milliseconds
      customClass: `${className} ${this.defaultClass} ${this.getClassByStatus(
        status
      )}`, // Custom CSS class (optional)
      // customIcon: '', // Custom icon (optional)
      showIcon: true, // Show default icon
      showCloseButton: true, // Show close button
      autoclose: true, // Auto close the notification
      autotimeout: 4000, // Auto close timeout in milliseconds
      // notificationsGap: 20, // Gap between notifications (optional)
      // notificationsPadding: 10, // Padding inside notifications (optional)
      type: 'filled', // Type of notification ('outline', 'filled')
      position: 'right top', // Position on the screen
    });
  }

  private getClassByStatus(status: string): string {
    switch (status) {
      case 'success':
        return `${this.defaultClass} bg-itgi-green text-white`;
      case 'error':
        return `${this.defaultClass} bg-red-600 text-white`;
      case 'info':
        return `${this.defaultClass} bg-itgi-blue text-white`;
      case 'warning':
        return `${this.defaultClass} bg-yellow-500 text-white`;
      default:
        return this.defaultClass;
    }
  }

  success(message: string, title?: string, className?: string) {
    this.show('success', message, title, className);
  }

  error(message: string, title?: string, className?: string) {
    this.show('error', message, title, className);
  }

  info(message: string, title?: string, className?: string) {
    this.show('info', message, title, className);
  }

  warning(message: string, title?: string, className?: string) {
    this.show('warning', message, title, className);
  }
}
