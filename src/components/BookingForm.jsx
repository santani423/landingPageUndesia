import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Calendar, Clock, MapPin, Phone, Mail, Upload, Package, Heart, Star } from 'lucide-react';
import { mockData } from './mock';
import axios from 'axios';

const BookingForm = ({ selectedPackage = null, onSuccess }) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    whatsapp: '',
    package_type: selectedPackage || '',
    invitation_type: 'website',
    event_type: 'wedding',
    event_date: '',
    event_time: '',
    location: '',
    venue_name: '',
    notes: '',
    photos: []
  });

  const [packages, setPackages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    // Load packages - for now use mock data
    setPackages(mockData.packages);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customer_name.trim()) {
      newErrors.customer_name = 'Nama lengkap wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.whatsapp.replace(/\s/g, ''))) {
      newErrors.whatsapp = 'Format nomor WhatsApp tidak valid';
    }

    if (!formData.package_type) {
      newErrors.package_type = 'Pilih paket undangan';
    }

    if (!formData.event_date) {
      newErrors.event_date = 'Tanggal acara wajib diisi';
    } else {
      const eventDate = new Date(formData.event_date);
      const today = new Date();
      if (eventDate < today) {
        newErrors.event_date = 'Tanggal acara tidak boleh di masa lalu';
      }
    }

    if (!formData.event_time) {
      newErrors.event_time = 'Waktu acara wajib diisi';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Lokasi acara wajib diisi';
    }

    if (uploadedFiles.length > 10) {
      newErrors.photos = 'Maksimal 10 foto yang dapat diunggah';
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    
    if (uploadedFiles.length + files.length > 10) {
      setErrors(prev => ({
        ...prev,
        photos: 'Maksimal 10 foto yang dapat diunggah'
      }));
      return;
    }

    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        alert(`File ${file.name} bukan format gambar yang valid`);
        return false;
      }

      if (file.size > maxSize) {
        alert(`File ${file.name} terlalu besar (maksimal 5MB)`);
        return false;
      }

      return true;
    });

    // For now, just store file info (in real implementation, upload to server)
    const newFiles = validFiles.map(file => ({
      file,
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file)
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Clear photo errors
    if (errors.photos) {
      setErrors(prev => ({
        ...prev,
        photos: null
      }));
    }
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, simulate API call with mock
      console.log('Booking form data:', {
        ...formData,
        photos: uploadedFiles.map(f => f.name)
      });

      // Mock successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('🎉 Pesanan berhasil dibuat!\n\nOrder Number: UND-2025-001\nStatus: Menunggu Pembayaran\n\nLink tracking akan dikirim via email.');
      
      if (onSuccess) {
        onSuccess({
          order_number: 'UND-2025-001',
          status: 'pending',
          tracking_token: 'track_abc123'
        });
      }

      // Reset form
      setFormData({
        customer_name: '',
        email: '',
        whatsapp: '',
        package_type: selectedPackage || '',
        invitation_type: 'website',
        event_type: 'wedding',
        event_date: '',
        event_time: '',
        location: '',
        venue_name: '',
        notes: '',
        photos: []
      });
      setUploadedFiles([]);
      
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedPackage = () => {
    return packages.find(pkg => pkg.name === formData.package_type);
  };

  const selectedPkg = getSelectedPackage();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-rose-50/30">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-serif font-bold text-gray-800">
            Form Pemesanan Undangan
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Isi formulir di bawah ini untuk memulai pembuatan undangan digital Anda
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-gray-800 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-rose-500" />
                Informasi Pemesan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customer_name" className="font-medium">
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="customer_name"
                    value={formData.customer_name}
                    onChange={(e) => handleInputChange('customer_name', e.target.value)}
                    placeholder="Masukkan nama lengkap"
                    className={errors.customer_name ? 'border-red-500' : ''}
                  />
                  {errors.customer_name && (
                    <p className="text-red-500 text-sm mt-1">{errors.customer_name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="email@contoh.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <Label htmlFor="whatsapp" className="font-medium">
                    Nomor WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className={errors.whatsapp ? 'border-red-500' : ''}
                  />
                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-gray-800 flex items-center">
                <Package className="w-5 h-5 mr-2 text-rose-500" />
                Pilih Paket & Jenis Undangan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="font-medium">Paket Undangan *</Label>
                  <Select 
                    value={formData.package_type} 
                    onValueChange={(value) => handleInputChange('package_type', value)}
                  >
                    <SelectTrigger className={errors.package_type ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Pilih paket undangan" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.name} value={pkg.name}>
                          <div className="flex items-center justify-between w-full">
                            <span>{pkg.name}</span>
                            <div className="flex items-center ml-4">
                              <span className="text-sm text-gray-600">{pkg.price}</span>
                              {pkg.popular && (
                                <Badge className="ml-2 bg-amber-100 text-amber-800 text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.package_type && (
                    <p className="text-red-500 text-sm mt-1">{errors.package_type}</p>
                  )}
                </div>

                <div>
                  <Label className="font-medium">Jenis Undangan *</Label>
                  <Select 
                    value={formData.invitation_type} 
                    onValueChange={(value) => handleInputChange('invitation_type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">🖥️ Undangan Website</SelectItem>
                      <SelectItem value="video">🎥 Undangan Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="font-medium">Jenis Acara *</Label>
                  <Select 
                    value={formData.event_type} 
                    onValueChange={(value) => handleInputChange('event_type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">💍 Pernikahan</SelectItem>
                      <SelectItem value="khitanan">🕌 Khitanan</SelectItem>
                      <SelectItem value="birthday">🎂 Ulang Tahun</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Package Info Display */}
              {selectedPkg && (
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border border-rose-200">
                  <h4 className="font-semibold text-rose-800 mb-2">{selectedPkg.name}</h4>
                  <p className="text-rose-700 text-sm mb-3">{selectedPkg.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPkg.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-rose-700">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-gray-800 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-rose-500" />
                Detail Acara
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="event_date" className="font-medium">
                    Tanggal Acara *
                  </Label>
                  <Input
                    id="event_date"
                    type="date"
                    value={formData.event_date}
                    onChange={(e) => handleInputChange('event_date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.event_date ? 'border-red-500' : ''}
                  />
                  {errors.event_date && (
                    <p className="text-red-500 text-sm mt-1">{errors.event_date}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="event_time" className="font-medium">
                    Waktu Acara *
                  </Label>
                  <Input
                    id="event_time"
                    type="time"
                    value={formData.event_time}
                    onChange={(e) => handleInputChange('event_time', e.target.value)}
                    className={errors.event_time ? 'border-red-500' : ''}
                  />
                  {errors.event_time && (
                    <p className="text-red-500 text-sm mt-1">{errors.event_time}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="venue_name" className="font-medium">
                    Nama Tempat
                  </Label>
                  <Input
                    id="venue_name"
                    value={formData.venue_name}
                    onChange={(e) => handleInputChange('venue_name', e.target.value)}
                    placeholder="Gedung Serbaguna"
                  />
                </div>

                <div className="md:col-span-3">
                  <Label htmlFor="location" className="font-medium">
                    Alamat Lokasi Acara *
                  </Label>
                  <Textarea
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Masukkan alamat lengkap tempat acara"
                    className={errors.location ? 'border-red-500' : ''}
                    rows={2}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                  )}
                </div>

                <div className="md:col-span-3">
                  <Label htmlFor="notes" className="font-medium">
                    Catatan Khusus
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Tema acara, permintaan khusus, atau informasi tambahan..."
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-gray-800 flex items-center">
                <Upload className="w-5 h-5 mr-2 text-rose-500" />
                Upload Foto (Opsional)
              </h3>
              
              <p className="text-gray-600 text-sm">
                Upload foto-foto untuk undangan Anda (maksimal 10 foto, format JPG/PNG/GIF, ukuran maksimal 5MB per foto)
              </p>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-rose-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <Label htmlFor="photo-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Klik untuk memilih foto atau drag & drop
                  </p>
                </Label>
              </div>

              {errors.photos && (
                <p className="text-red-500 text-sm">{errors.photos}</p>
              )}

              {/* Uploaded Files Preview */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Foto yang Diunggah ({uploadedFiles.length}/10):</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={file.preview}
                          alt={file.name}
                          className="w-full h-24 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                        >
                          ×
                        </button>
                        <p className="text-xs text-gray-500 mt-1 truncate">{file.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <div className="flex flex-col items-center space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white px-12 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Memproses Pesanan...
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 mr-2" />
                      Buat Pesanan Undangan
                    </>
                  )}
                </Button>
                
                <p className="text-center text-sm text-gray-500 max-w-md">
                  Dengan mengirim formulir ini, Anda menyetujui syarat dan ketentuan layanan UNDESIA.
                  Tim kami akan segera menghubungi Anda untuk konfirmasi pesanan.
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;