import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import backgroundImage from '../assets/images/img15.jpg';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('contact.successMessage'));
        setFormData({ name: '', email: '', message: '' });
        toast.success(t('contact.successMessage'), {
            position: 'top-center',
            autoClose: 3000,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <div
                    className="min-h-screen  bg-cover bg-center bg-no-repeat bg-fixed opacity-75"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
                    {t('contact.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block w-1/2 mx-auto text-lg mb-2 text-gray-800 dark:text-gray-200"
                        >
                            {t('contact.nameLabel')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-1/2 mx-auto block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block w-1/2 mx-auto text-lg mb-2 text-gray-800 dark:text-gray-200"
                        >
                            {t('contact.emailLabel')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-1/2 mx-auto block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block w-1/2 mx-auto text-lg mb-2 text-gray-800 dark:text-gray-200"
                        >
                            {t('contact.messageLabel')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-1/2 mx-auto block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                        >
                            {t('contact.submitButton')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}