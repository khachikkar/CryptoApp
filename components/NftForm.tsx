'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/service/supabase';

interface NFT {
    title: string;
    price: number;
    image: File | null;
}

type BucketParam = {
    bucket: string;
    file: File;
};

const uploadFileToBucket = async ({ bucket, file }: BucketParam) => {
    const fileName = `${Date.now()}_${file.name}`;
    console.log("Uploading to bucket:", bucket);
    console.log("File name:", fileName);

    const { error: uploadError } = await supabase.storage.from(bucket).upload(fileName, file);

    if (uploadError) {
        throw new Error(uploadError.message);
    }

    const { data } = await supabase.storage.from(bucket).getPublicUrl(fileName);

// Check if `data` is available, if not, handle the error
    if (!data) {
        throw new Error('Failed to retrieve public URL');
    }

    console.log("Generated public URL:", data.publicUrl);


    return data.publicUrl;
};


const NFTForm: React.FC = () => {
    const [formData, setFormData] = useState<NFT>({
        title: '',
        price: 0,
        image: null,
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) || 0 : value,
        }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({
            ...prev,
            image: file,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            if (!formData.image) {
                throw new Error('Image file is required');
            }

            const imageUrl = await uploadFileToBucket({ bucket: "crypto1", file: formData.image! });


            const { error: insertError } = await supabase.from('products').insert([
                {
                    name: formData.title,
                    price: formData.price,
                    image_url: imageUrl,
                },
            ]);

            if (insertError) {
                throw new Error(`Insert failed: ${insertError.message}`);
            }

            setSuccessMessage('NFT added successfully!');
            setFormData({ title: '', price: 0, image: null }); // Reset form
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                // Handle the case where the error is not an instance of Error
                setErrorMessage('An unknown error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4">Add a New NFT</h2>

                {successMessage && (
                    <p className="mb-4 text-green-400">{successMessage}</p>
                )}
                {errorMessage && (
                    <p className="mb-4 text-red-400">{errorMessage}</p>
                )}

                <div className="mb-4">
                    <label className="block text-gray-300 mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-black rounded-md"
                        placeholder="NFT Title"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 mb-2" htmlFor="price">
                        Price (ETH)
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price || ''}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-black rounded-md"
                        placeholder="Price in ETH"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 mb-2" htmlFor="image">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full text-gray-300"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md font-bold text-white transition ${
                        loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
                    }`}
                    disabled={loading}
                >
                    {loading ? 'Uploading...' : 'Add NFT'}
                </button>
            </form>
        </div>
    );
};

export default NFTForm;
