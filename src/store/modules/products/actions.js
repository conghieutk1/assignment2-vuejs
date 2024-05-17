export default {
    async addNewProduct(context, data) {
        const productId = new Date().getTime();
        const productData = {
            id: productId,
            image: data.image,
            productName: data.name,
            price: data.price,
            amount: data.amount,
            description: data.descript,
        };

        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(productData),
            }
        );

        if (response.ok) {
            console.log('Create new product successfully!!!');
            // console.log('response: ', response);
        }

        context.commit('addNewProduct', {
            ...productData,
            id: productId,
        });
    },
    async editProduct(context, data) {
        console.log('data = ', data);
        const productId = data.id;
        const productData = {
            id: productId,
            image: data.image,
            productName: data.name,
            price: data.price,
            amount: data.amount,
            description: data.descript,
        };
        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
            {
                method: 'PATCH', // Sử dụng PATCH để cập nhật một phần dữ liệu
                body: JSON.stringify(productData),
            }
        );
        if (response.ok) {
            context.commit('editProduct', productData);
            console.log('Product updated successfully');
        } else {
            console.error('Failed to update product:', response.statusText);
        }
    },
    async deleteProduct(context, data) {
        let productId = data.id;
        try {
            const response = await fetch(
                `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
                {
                    method: 'DELETE', // Sử dụng phương thức DELETE để xoá product
                }
            );
            if (response.ok) {
                console.log('Product deleted successfully');
                context.commit('deleteProduct', { id: productId });
            } else {
                console.error('Failed to delete product:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    },
    async getAllProducts(context) {
        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`
        );
        // console.log('response = ', response);
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        const products = [];
        for (const key in responseData) {
            const product = {
                id: responseData[key].id,
                image: responseData[key].image,
                productName: responseData[key].productName,
                price: responseData[key].price,
                amount: responseData[key].amount,
                description: responseData[key].description,
            };
            products.push(product);
        }
        context.commit('setProducts', products);
    },
    async getProductsForPage(context, payload) {
        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`
        );

        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        const data = Object.values(responseData);
        // console.log('data ', data);
        // Lấy chỉ 10 sản phẩm từ vị trí bắt đầu là 0
        const startIndex =
            payload.pageNumber * payload.itemsPerPage - payload.itemsPerPage;
        const endIndex = payload.pageNumber * payload.itemsPerPage;
        const tempData = data.slice(startIndex, endIndex);

        const paginatedProducts = [];
        for (const key in tempData) {
            const product = {
                id: tempData[key].id,
                image: tempData[key].image,
                productName: tempData[key].productName,
                price: tempData[key].price,
                amount: tempData[key].amount,
                description: tempData[key].description,
            };
            paginatedProducts.push(product);
        }
        context.commit('setPaginatedProducts', paginatedProducts);
    },
    // async searchProduct(context, payload) {},
};
