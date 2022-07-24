export enum ChatType {
  sender = "sender",
  receiver = "receiver",
}

export class ChatMessageModel {
  id: string;
  type: ChatType;
  message: string;
  createdDate: Date;
  userId?: string;

  constructor(id: string, type: ChatType, message: string, createdDate: Date) {
    this.id = id;
    this.type = type;
    this.message = message;
    this.createdDate = createdDate;
  }

  static fromJson(json: any): ChatMessageModel {
    return new ChatMessageModel(
      json["id"],
      json["type"],
      json["message"],
      json["createdDate"]
    );
  }
}
