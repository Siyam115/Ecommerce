import { Component } from '@angular/core';
import { Tasks } from '../service/model/task';
import { WebSocketService } from '../service/web-socket.service';

@Component({
  selector: 'app-web-socket-messaging',
  templateUrl: './web-socket-messaging.component.html',
  styleUrls: ['./web-socket-messaging.component.scss']
})
export class WebSocketMessagingComponent {
  faqs = [
    { question: 'What is the return policy?', answer: 'You can return items within 30 days of purchase.' },
    { question: 'How do I track my order?', answer: 'You can track your order using the tracking number sent to your email.' },
    // More predefined FAQs can go here...
  ];

  // Variables to hold the new FAQ input data
  newFaqQuestion: string = '';
  newFaqAnswer: string = '';

  // Method to send a new FAQ
  sendFaq() {
    if (this.newFaqQuestion && this.newFaqAnswer) {
      // Add the new FAQ to the list
      this.faqs.push({ question: this.newFaqQuestion, answer: this.newFaqAnswer });

      // Clear the input fields after submission
      this.newFaqQuestion = '';
      this.newFaqAnswer = '';
    } else {
      alert('Please fill both the question and answer fields.');
    }
  }
}