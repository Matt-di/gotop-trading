"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail, Clock, Check, Trash2, ExternalLink, Phone, Building2 } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  serviceInterest?: string;
  ipAddress?: string;
  userAgent?: string;
  isRead: boolean;
  createdAt: string;
}

export function ContactMessagesManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: true }),
      });

      if (response.ok) {
        fetchMessages();
      }
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchMessages();
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading messages...</div>;
  }

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Contact Messages</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-12 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
          <Mail className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg">No messages yet</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`cursor-pointer hover:shadow-md transition-shadow ${
                !message.isRead ? 'border-amber-500' : ''
              }`}
              onClick={() => {
                setSelectedMessage(message);
                if (!message.isRead) {
                  handleMarkAsRead(message.id);
                }
              }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{message.name}</CardTitle>
                      {!message.isRead && <Badge variant="default">New</Badge>}
                    </div>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {message.email}
                      </span>
                      {message.serviceInterest && (
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {message.serviceInterest}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDate(message.createdAt)}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {message.subject && (
                  <p className="font-medium text-sm mb-2">{message.subject}</p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {message.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedMessage && (
        <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <div>
                  <DialogTitle>{selectedMessage.name}</DialogTitle>
                  <DialogDescription className="mt-2">
                    {formatDate(selectedMessage.createdAt)}
                  </DialogDescription>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteMessage(selectedMessage.id)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {selectedMessage.email}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                {selectedMessage.serviceInterest && (
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <span>{selectedMessage.serviceInterest}</span>
                  </div>
                )}
                {selectedMessage.ipAddress && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-xs">{selectedMessage.ipAddress}</span>
                  </div>
                )}
              </div>

              {selectedMessage.subject && (
                <div>
                  <h4 className="font-medium mb-2">Subject</h4>
                  <p className="text-gray-700 dark:text-gray-300">{selectedMessage.subject}</p>
                </div>
              )}

              <div>
                <h4 className="font-medium mb-2">Message</h4>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${selectedMessage.email}`;
                  }}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Reply via Email
                </Button>
                {!selectedMessage.isRead && (
                  <Button
                    variant="outline"
                    onClick={() => handleMarkAsRead(selectedMessage.id)}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Mark as Read
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
