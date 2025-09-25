import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  Clock, 
  CheckCircle, 
  Circle, 
  Package, 
  CreditCard, 
  Palette, 
  Share2, 
  Search,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink
} from 'lucide-react';

const OrderTracking = ({ trackingToken = null }) => {
  const [token, setToken] = useState(trackingToken || '');
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock order data for demonstration
  const mockOrderData = {
    order_number: 'UND-2025-001',
    status: 'in-progress',
    customer: {
      name: 'Rina & Fajar',
      email: 'rina.fajar@email.com',
      whatsapp: '+6281234567890'
    },
    package: {
      name: 'Paket Favorit',
      type: 'favorit',
      invitation_type: 'website'
    },
    event: {
      type: 'wedding',
      date: '2025-03-15',
      time: '19:00',
      location: 'Gedung Serbaguna Jakarta Selatan',
      venue_name: 'Grand Ballroom'
    },
    payment: {
      amount: 95000,
      status: 'paid',
      paid_at: '2025-01-16T10:30:00Z',
      method: 'qris'
    },
    demo_link: 'https://demo.undesia.com/rina-fajar',
    created_at: '2025-01-15T14:20:00Z',
    timeline: [
      {
        status: 'pending',
        date: '2025-01-15',
        time: '14:20',
        title: 'Pesanan Diterima',
        description: 'Pesanan undangan Anda telah berhasil diterima dan sedang diverifikasi',
        completed: true
      },
      {
        status: 'paid',
        date: '2025-01-16',
        time: '10:30',
        title: 'Pembayaran Dikonfirmasi',
        description: 'Pembayaran sebesar Rp 95.000 telah berhasil dikonfirmasi via QRIS',
        completed: true
      },
      {
        status: 'in-progress',
        date: '2025-01-17',
        time: '09:15',
        title: 'Sedang Dalam Pembuatan',
        description: 'Tim desainer kami sedang membuat undangan digital sesuai tema yang dipilih',
        completed: true
      },
      {
        status: 'demo-ready',
        date: null,
        time: null,
        title: 'Preview Demo Siap',
        description: 'Undangan digital telah selesai dan siap untuk direview',
        completed: false
      },
      {
        status: 'completed',
        date: null,
        time: null,
        title: 'Undangan Selesai',
        description: 'Undangan digital final telah dikirim dan siap untuk dibagikan',
        completed: false
      }
    ]
  };

  const handleSearch = async () => {
    if (!token.trim()) {
      setError('Masukkan nomor pesanan atau kode tracking');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Mock API call - in real implementation, call backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo, accept any token and show mock data
      setOrderData(mockOrderData);
      
    } catch (err) {
      setError('Pesanan tidak ditemukan. Periksa kembali nomor pesanan atau kode tracking Anda.');
      setOrderData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      paid: 'bg-blue-100 text-blue-800',
      'in-progress': 'bg-purple-100 text-purple-800',
      'demo-ready': 'bg-orange-100 text-orange-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    const texts = {
      pending: 'Menunggu Pembayaran',
      paid: 'Pembayaran Dikonfirmasi',
      'in-progress': 'Sedang Dikerjakan',
      'demo-ready': 'Preview Siap',
      completed: 'Selesai',
      cancelled: 'Dibatalkan'
    };
    return texts[status] || status;
  };

  const formatEventType = (type) => {
    const types = {
      wedding: 'Pernikahan',
      khitanan: 'Khitanan', 
      birthday: 'Ulang Tahun'
    };
    return types[type] || type;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Lacak Pesanan Undangan
          </h1>
          <p className="text-gray-600 text-lg">
            Masukkan nomor pesanan atau kode tracking untuk melihat status undangan Anda
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8 shadow-lg border-0 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-center">
              Cari Pesanan Anda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="tracking-input" className="font-medium">
                  Nomor Pesanan / Kode Tracking
                </Label>
                <Input
                  id="tracking-input"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="UND-2025-001 atau track_abc123"
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white px-6 py-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Mencari...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Lacak Pesanan
                    </>
                  )}
                </Button>
              </div>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </CardContent>
        </Card>

        {/* Order Details */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-serif">
                      Pesanan #{orderData.order_number}
                    </CardTitle>
                    <p className="text-gray-600 mt-1">
                      Dibuat pada {formatDateTime(orderData.created_at)}
                    </p>
                  </div>
                  <Badge className={getStatusColor(orderData.status)}>
                    {getStatusText(orderData.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Customer Info */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Informasi Pemesan</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{orderData.customer.name}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{orderData.customer.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{orderData.customer.whatsapp}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Detail Acara</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Package className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{formatEventType(orderData.event.type)} - {orderData.package.name}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{formatDate(orderData.event.date)} pukul {orderData.event.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                        <span>{orderData.event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Pembayaran</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CreditCard className="w-4 h-4 text-gray-500 mr-2" />
                        <span>Rp {orderData.payment.amount.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Dibayar via {orderData.payment.method?.toUpperCase()} pada {formatDateTime(orderData.payment.paid_at)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Demo Link */}
                  {orderData.demo_link && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Preview Undangan</h3>
                      <Button
                        onClick={() => window.open(orderData.demo_link, '_blank')}
                        className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Lihat Preview
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-serif">
                  Timeline Progres Pesanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderData.timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {item.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-300" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {item.title}
                          </h4>
                          {item.date && (
                            <span className="text-sm text-gray-500">
                              {formatDate(item.date)} {item.time}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm mt-1 ${item.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => alert('Fitur download invoice akan segera tersedia')}
                className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Invoice
              </Button>
              
              <Button
                onClick={() => window.open(`https://wa.me/6281234567890?text=Halo, saya ingin menanyakan tentang pesanan ${orderData.order_number}`, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Admin
              </Button>
            </div>
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-8 shadow-lg border-0 bg-white">
          <CardContent className="text-center py-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              Butuh Bantuan?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Tim customer service kami siap membantu Anda 24/7
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                WhatsApp Support
              </Button>
              <Button
                onClick={() => window.open('mailto:support@undesia.com', '_blank')}
                variant="outline"
                className="border-rose-400 text-rose-600 hover:bg-rose-50"
              >
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderTracking;