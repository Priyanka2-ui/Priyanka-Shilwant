import { type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

class InMemoryStorage implements IStorage {
  private inquiries: Inquiry[] = [];
  private nextId = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      id: this.nextId++,
      name: insertInquiry.name,
      email: insertInquiry.email,
      message: insertInquiry.message,
      createdAt: new Date(),
    };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = new InMemoryStorage();
