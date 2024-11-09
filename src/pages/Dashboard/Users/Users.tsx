import React, { useEffect, useState } from 'react';
import styles from './Users.module.css';
import Pagination from '../../../components/Pagination2/Pagination';
import { useAuth } from '../../../context';
import { User, User2 } from '../../../types/Model';
import { getUsers, resetUserPasswordAPI, updateRoleOrStatusAPI } from '../../../services/userService';
import UserActionsPopup from './UserActionsPopup';
import moment from 'moment';
import UserActionModal from './UserActionModal';

const Users: React.FC = () => {
    const { user } = useAuth();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [resultCount, setResultCount] = useState<number>(10);
    const [totalValues, setTotalValues] = useState<number>(0);
    const [userList, setUserList] = useState<User2[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalUserId, setModalUserId] = useState<number | null>(null);
    const [modalAction, setModalAction] = useState<string>('');

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleActionClick = (userId: number, action: string) => {
        if (action === 'resetPass') {
            resetUserPasswordAPI(userId);
        } else {
            setModalUserId(userId);
            setModalAction(action);
            setShowModal(true);
        }
    };

    const handleModalSubmit = (userId: number, input: string) => {
        if (modalAction === 'changeRole') {
            updateRoleOrStatusAPI(userId, input, 'role');
        } else if (modalAction === 'changeStatus') {
            updateRoleOrStatusAPI(userId, input, 'status');
        }
        setShowModal(false);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (!user) return;
                const data = {
                    userId: user.id,
                    currentPage,
                    resultCount: 10
                };
                const response = await getUsers(data);
                const formattedUsers = response.users.map(user => ({
                    ...user,
                    createdDate: moment(user.createdDate), // Chuyển đổi từ chuỗi sang đối tượng moment
                    lastActivity: moment(user.lastActivity),
                }));
                setUserList(formattedUsers);
                setTotalValues(response.totalFound)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (user) {
            fetchUsers();
        }

    }, [user, currentPage]);

    return (
        <>
            <div className={`${styles['card']} ${styles['card-body']} ${styles['shadow']} ${styles['border-0']} ${styles['table-wrapper']} ${styles['table-responsive']}`}>
                <table className={`${styles['table']} ${styles['user-table']} ${styles['table-hover']} ${styles['align-items-center']}`}>
                    <thead className={`${styles['thead']}`}>
                        <tr className={`${styles['tr']}`}>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>#</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Name</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Role</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Date Created</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Verified</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Status</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles['tbody']}`}>
                        {userList.length > 0 ? (
                            userList.map((user) => {
                                return (<tr key={user.userId} className={`${styles['tr']}`}>
                                    <td className={`${styles['td']}`}>{user.userId}</td>
                                    <td className={`${styles['td']}`}>
                                        <div className={`${styles['d-flex']} ${styles['align-items-center']}`}>
                                            <img
                                                src={user.avatarUrl || 'default-avatar.png'}
                                                className={`${styles['img']} ${styles['avatar']} ${styles['rounded-circle']} ${styles['me-3']}`}
                                                alt="Avatar"
                                            />
                                            <div className={`${styles['d-block']}`}>
                                                <span className={`${styles['fw-bold']}`}>{user.fullName}</span>
                                                <div className={`${styles['small']} ${styles['text-gray']}`}>{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`${styles['td']}`}>{user.role}</td>
                                    <td className={`${styles['td']}`}>{user.createdDate.format("YYYY MMM DD HH:mm")}</td>

                                    <td className={`${styles['td']}`}>{user.verified ? 'Yes' : 'No'}</td>
                                    <td className={`${styles['td']}`}>{user.status}</td>
                                    <td className={`${styles['td']}`}>
                                        <UserActionsPopup user={user} onActionClick={handleActionClick} />
                                    </td>
                                </tr>)
                            })
                        ) : (
                            <tr>
                                <td colSpan={7} className={`${styles['text-center']}`}>No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Pagination totalPages={totalValues} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>

            {showModal && modalUserId && (
                <UserActionModal
                    userId={modalUserId}
                    actionType={modalAction}
                    onSubmit={handleModalSubmit}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
};

export default Users;
