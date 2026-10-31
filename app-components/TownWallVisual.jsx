import React, { useState } from 'react';

const STORIES = [
  { id: 1, username: 'sarah_downtown', emoji: '☕', hasStory: true, viewed: false },
  { id: 2, username: 'mike_neighborhood', emoji: '🌿', hasStory: true, viewed: false },
  { id: 3, username: 'local_artist', emoji: '🎨', hasStory: true, viewed: true },
  { id: 4, username: 'coffee_lover', emoji: '☕', hasStory: true, viewed: false },
  { id: 5, username: 'fitness_guru', emoji: '💪', hasStory: true, viewed: true },
];

const SAMPLE_POSTS = [
  {
    id: 1,
    username: 'sarah_downtown',
    emoji: '☕',
    location: 'Downtown',
    text: 'Just discovered this amazing coffee shop on Main Street! The atmosphere is perfect for remote work ☕',
    reactions: 24,
    comments: 5,
    time: '2h ago',
  },
  {
    id: 2,
    username: 'mike_neighborhood',
    emoji: '🌿',
    location: 'Westside',
    text: 'Anyone up for a community cleanup this Saturday? Let\'s make our streets shine! 🌿',
    reactions: 18,
    comments: 12,
    time: '4h ago',
  },
  {
    id: 3,
    username: 'local_artist',
    emoji: '🎨',
    location: 'Arts District',
    text: 'New mural going up this weekend! Come by and watch the process 🎨',
    reactions: 42,
    comments: 8,
    time: '6h ago',
  },
];

export default function TownWallVisual() {
  const [selectedLocation, setSelectedLocation] = useState('Your City');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [showLocationMenu, setShowLocationMenu] = useState(false);

  const toggleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#000000',
      padding: '12px',
      gap: '12px',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '8px',
      }}>
        <div
          onClick={() => setShowLocationMenu(!showLocationMenu)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
        >
          <span style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#FFFFFF',
          }}>
            {selectedLocation}
          </span>
          <span style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
          }}>
            ▼
          </span>
        </div>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <span style={{ fontSize: '14px' }}>🔔</span>
          </div>
        </div>
      </div>

      {/* Location Menu */}
      {showLocationMenu && (
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '12px',
          right: '12px',
          background: '#121212',
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 10,
        }}>
          {['Global', 'Your City', 'Downtown', 'Westside', 'Arts District'].map((loc) => (
            <div
              key={loc}
              onClick={() => {
                setSelectedLocation(loc);
                setShowLocationMenu(false);
              }}
              style={{
                padding: '10px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: selectedLocation === loc ? 'rgba(255,255,255,0.1)' : 'transparent',
                marginBottom: '4px',
              }}
              onMouseEnter={(e) => {
                if (selectedLocation !== loc) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLocation !== loc) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span style={{
                fontSize: '14px',
                color: '#FFFFFF',
                fontWeight: selectedLocation === loc ? '600' : '400',
              }}>
                {loc}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Stories Bar */}
      <div style={{
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
        paddingBottom: '4px',
      }}>
        {/* Add Story */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          flexShrink: 0,
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}>
            +
          </div>
          <span style={{
            fontSize: '10px',
            color: 'rgba(255,255,255,0.6)',
          }}>
            Add Story
          </span>
        </div>
        {/* Story Items */}
        {STORIES.map((story) => (
          <div
            key={story.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: story.viewed ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              padding: '2px',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                {story.emoji}
              </div>
            </div>
            <span style={{
              fontSize: '10px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '60px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* Compact Composer */}
      <div style={{
        background: '#121212',
        borderRadius: '12px',
        padding: '12px',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          color: '#fff',
        }}>
          +
        </div>
        <span style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
        }}>
          What's happening in your neighborhood?
        </span>
      </div>

      {/* Posts */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflowY: 'auto',
      }}>
        {SAMPLE_POSTS.map((post) => (
          <div
            key={post.id}
            style={{
              background: '#121212',
              borderRadius: '12px',
              padding: '14px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Post Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4ADE80, #22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}>
                {post.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                  }}>
                    {post.username}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.4)',
                  }}>
                    • {post.location}
                  </span>
                </div>
                <span style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  {post.time}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              lineHeight: '1.5',
              margin: '0 0 12px 0',
            }}>
              {post.text}
            </p>

            {/* Post Actions */}
            <div style={{
              display: 'flex',
              gap: '16px',
              paddingTop: '10px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div
                onClick={() => toggleLike(post.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <span style={{
                  fontSize: '16px',
                  color: likedPosts.has(post.id) ? '#EF4444' : 'rgba(255,255,255,0.5)',
                }}>
                  {likedPosts.has(post.id) ? '❤️' : '🤍'}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  {post.reactions + (likedPosts.has(post.id) ? 1 : 0)}
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: '16px' }}>💬</span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  {post.comments}
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: '16px' }}>🔗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
